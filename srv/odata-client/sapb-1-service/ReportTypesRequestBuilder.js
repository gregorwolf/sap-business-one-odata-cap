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
exports.ReportTypesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var ReportTypes_1 = require("./ReportTypes");
/**
 * Request builder class for operations supported on the [[ReportTypes]] entity.
 */
var ReportTypesRequestBuilder = /** @class */ (function (_super) {
    __extends(ReportTypesRequestBuilder, _super);
    function ReportTypesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `ReportTypes` entity based on its keys.
     * @param typeCode Key property. See [[ReportTypes.typeCode]].
     * @returns A request builder for creating requests to retrieve one `ReportTypes` entity based on its keys.
     */
    ReportTypesRequestBuilder.prototype.getByKey = function (typeCode) {
        return new v4_1.GetByKeyRequestBuilder(ReportTypes_1.ReportTypes, { TypeCode: typeCode });
    };
    /**
     * Returns a request builder for querying all `ReportTypes` entities.
     * @returns A request builder for creating requests to retrieve all `ReportTypes` entities.
     */
    ReportTypesRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(ReportTypes_1.ReportTypes);
    };
    /**
     * Returns a request builder for creating a `ReportTypes` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ReportTypes`.
     */
    ReportTypesRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(ReportTypes_1.ReportTypes, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `ReportTypes`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ReportTypes`.
     */
    ReportTypesRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(ReportTypes_1.ReportTypes, entity);
    };
    ReportTypesRequestBuilder.prototype.delete = function (typeCodeOrEntity) {
        return new v4_1.DeleteRequestBuilder(ReportTypes_1.ReportTypes, typeCodeOrEntity instanceof ReportTypes_1.ReportTypes ? typeCodeOrEntity : { TypeCode: typeCodeOrEntity });
    };
    return ReportTypesRequestBuilder;
}(v4_1.RequestBuilder));
exports.ReportTypesRequestBuilder = ReportTypesRequestBuilder;
//# sourceMappingURL=ReportTypesRequestBuilder.js.map