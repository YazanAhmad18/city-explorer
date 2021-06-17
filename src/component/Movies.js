import React, { Component } from 'react'
import Movie from './Movie';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Alert from 'react-bootstrap/Alert'

export class Movies extends Component {
    render() {
        return (
            <Container style={{ marginTop: "50px" }}>
                <h2 style={{ marginTop: "50px" }} >Movies : </h2>
                <Row>
                    {
                        typeof this.props.moviesData == "string" ? (
                            <Alert variant="danger" style={{ marginTop: "50px" }}>
                                <Alert.Heading>Movie search result :</Alert.Heading>
                                <p>
                                    {this.props.moviesData}
                                </p>
                            </Alert>
                        ) : (
                            this.props.moviesData.map(value => {
                                return (

                                    <Movie
                                        poster_path={value.poster_path}
                                        title={value.title}
                                        overview={value.overview}
                                        vote_average={value.vote_average}
                                        vote_count={value.vote_count}
                                        popularity={value.popularity}
                                        release_date={value.release_date}
                                    />

                                   
                                )
                            })
                        )
                    }
                </Row>
            </Container>
        )
    }
}

export default Movies