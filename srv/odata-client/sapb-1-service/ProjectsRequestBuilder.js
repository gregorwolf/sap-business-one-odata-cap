"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var Projects_1 = require("./Projects");
/**
 * Request builder class for operations supported on the [[Projects]] entity.
 */
var ProjectsRequestBuilder = /** @class */ (function (_super) {
    __extends(ProjectsRequestBuilder, _super);
    function ProjectsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Projects` entity based on its keys.
     * @param code Key property. See [[Projects.code]].
     * @returns A request builder for creating requests to retrieve one `Projects` entity based on its keys.
     */
    ProjectsRequestBuilder.prototype.getByKey = function (code) {
        return new v4_1.GetByKeyRequestBuilder(Projects_1.Projects, { Code: code });
    };
    /**
     * Returns a request builder for querying all `Projects` entities.
     * @returns A request builder for creating requests to retrieve all `Projects` entities.
     */
    ProjectsRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(Projects_1.Projects);
    };
    /**
     * Returns a request builder for creating a `Projects` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Projects`.
     */
    ProjectsRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(Projects_1.Projects, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `Projects`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Projects`.
     */
    ProjectsRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(Projects_1.Projects, entity);
    };
    ProjectsRequestBuilder.prototype.delete = function (codeOrEntity) {
        return new v4_1.DeleteRequestBuilder(Projects_1.Projects, codeOrEntity instanceof Projects_1.Projects ? codeOrEntity : { Code: codeOrEntity });
    };
    return ProjectsRequestBuilder;
}(v4_1.RequestBuilder));
exports.ProjectsRequestBuilder = ProjectsRequestBuilder;
//# sourceMappingURL=ProjectsRequestBuilder.js.map