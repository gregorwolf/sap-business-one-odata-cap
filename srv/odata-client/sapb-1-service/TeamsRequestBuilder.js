"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var Teams_1 = require("./Teams");
/**
 * Request builder class for operations supported on the [[Teams]] entity.
 */
var TeamsRequestBuilder = /** @class */ (function (_super) {
    __extends(TeamsRequestBuilder, _super);
    function TeamsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Teams` entity based on its keys.
     * @param teamId Key property. See [[Teams.teamId]].
     * @returns A request builder for creating requests to retrieve one `Teams` entity based on its keys.
     */
    TeamsRequestBuilder.prototype.getByKey = function (teamId) {
        return new core_1.GetByKeyRequestBuilderV4(Teams_1.Teams, { TeamID: teamId });
    };
    /**
     * Returns a request builder for querying all `Teams` entities.
     * @returns A request builder for creating requests to retrieve all `Teams` entities.
     */
    TeamsRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(Teams_1.Teams);
    };
    /**
     * Returns a request builder for creating a `Teams` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Teams`.
     */
    TeamsRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(Teams_1.Teams, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `Teams`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Teams`.
     */
    TeamsRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(Teams_1.Teams, entity);
    };
    TeamsRequestBuilder.prototype.delete = function (teamIdOrEntity) {
        return new core_1.DeleteRequestBuilderV4(Teams_1.Teams, teamIdOrEntity instanceof Teams_1.Teams ? teamIdOrEntity : { TeamID: teamIdOrEntity });
    };
    return TeamsRequestBuilder;
}(core_1.RequestBuilder));
exports.TeamsRequestBuilder = TeamsRequestBuilder;
//# sourceMappingURL=TeamsRequestBuilder.js.map