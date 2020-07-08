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
exports.PartnersSetupsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var PartnersSetups_1 = require("./PartnersSetups");
/**
 * Request builder class for operations supported on the [[PartnersSetups]] entity.
 */
var PartnersSetupsRequestBuilder = /** @class */ (function (_super) {
    __extends(PartnersSetupsRequestBuilder, _super);
    function PartnersSetupsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PartnersSetups` entity based on its keys.
     * @param name Key property. See [[PartnersSetups.name]].
     * @returns A request builder for creating requests to retrieve one `PartnersSetups` entity based on its keys.
     */
    PartnersSetupsRequestBuilder.prototype.getByKey = function (name) {
        return new v4_1.GetByKeyRequestBuilder(PartnersSetups_1.PartnersSetups, { Name: name });
    };
    /**
     * Returns a request builder for querying all `PartnersSetups` entities.
     * @returns A request builder for creating requests to retrieve all `PartnersSetups` entities.
     */
    PartnersSetupsRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(PartnersSetups_1.PartnersSetups);
    };
    /**
     * Returns a request builder for creating a `PartnersSetups` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PartnersSetups`.
     */
    PartnersSetupsRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(PartnersSetups_1.PartnersSetups, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `PartnersSetups`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PartnersSetups`.
     */
    PartnersSetupsRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(PartnersSetups_1.PartnersSetups, entity);
    };
    PartnersSetupsRequestBuilder.prototype.delete = function (nameOrEntity) {
        return new v4_1.DeleteRequestBuilder(PartnersSetups_1.PartnersSetups, nameOrEntity instanceof PartnersSetups_1.PartnersSetups ? nameOrEntity : { Name: nameOrEntity });
    };
    return PartnersSetupsRequestBuilder;
}(v4_1.RequestBuilder));
exports.PartnersSetupsRequestBuilder = PartnersSetupsRequestBuilder;
//# sourceMappingURL=PartnersSetupsRequestBuilder.js.map