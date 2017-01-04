import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

process.env.NODE_ENV = 'production';

console.log(chalk.blue('Generating minified bundle for production. it will take a moment...'));

webpack(webpackConfig).run((err, stats) => {
    if(err){
        console.log(chalk.red(err));
        return 1;
    }

    const jsonStatus = stats.toJson();

    if(jsonStatus.hasErrors){
        return jsonStatus.errors.map(error => console.log(chalk.red(error)));
    }

    if(jsonStatus.hasWarnings){
        console.log(chalk.yellow('webpack generated following warnings: '));
        jsonStatus.warnings.map(warning => console.log(chalk.yellow(warning)))
    }

    console.log(`webpack stats: ${stats}`);

    //Build success if we got this far
    console.log(chalk.green('your app has been build for production and written to /dist'));
    
    return 0;
});