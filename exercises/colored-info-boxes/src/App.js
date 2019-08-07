import React from 'react'
import Box from './Box.js'

const App = (props) => {
    console.log(props)
    return (
        <div>
           <Box title = {'this tis the Title'} color = {'red'} subtitle={'SubTitleText'} information={'The Info on the text'} />
           <Box title = {'This is the second box'} color={'orange'} subtitle={'This is the text to the second one'} information={'What do you think'} />
           <Box title = {'Rocky 3'} color={'yellow'} subtitle={'Rocky Strikes Back'} information={'Rocky Fights Cancer'} />
           <Box title = {'Where are we'} color={'green'} subtitle={'WHatasedf'} information = {'The best around'} />
           <Box title = {'Wait that the karate kid'} color= {'purple'} subtitle={'Next tiel'} information = {'Now we waait'} />
           <Box title = {'karate kid'} color= {'white'} subtitle={'The next one'} information = {'No more'} />
           <Box title = {'fjk'} color= {'teal'} subtitle={'uuuuhhhh'} information = {'face'} />
           <Box title = {'yyy'} color= {'red'} subtitle={'yesterday'} information = {'whhh'} />
           <Box title = {'tttyecedf'} color= {'green'} subtitle={'green'} information = {'Real'} />
           <Box title = {'enough'} color= {'purple'} subtitle={'yestffjfjfd'} information = {'yesterday'} />
        </div>
    )
}


export default App