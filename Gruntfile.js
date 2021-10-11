module.exports = function (grunt) {
  grunt.initConfig({
    copy: {
      //faz a copia para a pasta dist
      project: {
        expand: true,
        cwd: ".",
        src: ["**", "!Gruntfile.js", "!package.json", "!bower.json"],
        dest: "dist",
      },
    },
    clean: {
      //Limpa a pasta dist antes de copiar novamente
      dist: {
        src: "dist",
      },
    },
    usemin: {
      html: "dist/**/*.html",
    },
    useminPrepare: {
      options: {
        root: "dist",
        dist: "dist",
      },
      html: "dist/**/*.html",
    },
    ngAnnotate: {
      scripts: {
        expand: true,
        src: ["dist/js/**/*.js"],
      },
    },
  });

  grunt.registerTask("default", ["dist", "minifica"]); //tarefa para ser executada sem parametros
  grunt.registerTask("dist", ["clean", "copy"]);
  grunt.registerTask("minifica", [
    "useminPrepare",
    "ngAnnotate",
    "concat",
    "uglify",
    "cssmin",
    "usemin",
  ]);
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-usemin");
  grunt.loadNpmTasks("grunt-ng-annotate");
};
