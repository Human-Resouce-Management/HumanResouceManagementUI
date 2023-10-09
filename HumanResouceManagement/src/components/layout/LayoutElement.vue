<template>
  <div>
    <el-container>
      <el-header>Header</el-header>
     <el-container>
      <el-aside width="200px">Aside a</el-aside>
      
        <el-main>
          <router-view/>
        </el-main>
       
      </el-container>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>


<style>
 .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}
.el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
}
.el-menu {
  border-right: none;
}
 .el-main {
  padding: 10px;
}
.toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
</style>