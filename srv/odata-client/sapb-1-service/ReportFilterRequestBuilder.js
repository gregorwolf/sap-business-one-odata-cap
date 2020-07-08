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
exports.ReportFilterRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var ReportFilter_1 = require("./ReportFilter");
/**
 * Request builder class for operations supported on the [[ReportFilter]] entity.
 */
var ReportFilterRequestBuilder = /** @class */ (function (_super) {
    __extends(ReportFilterRequestBuilder, _super);
    function ReportFilterRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `ReportFilter` entity based on its keys.
     * @param code Key property. See [[ReportFilter.code]].
     * @returns A request builder for creating requests to retrieve one `ReportFilter` entity based on its keys.
     */
    ReportFilterRequestBuilder.prototype.getByKey = function (code) {
        return new v4_1.GetByKeyRequestBuilder(ReportFilter_1.ReportFilter, { Code: code });
    };
    /**
     * Returns a request builder for querying all `ReportFilter` entities.
     * @returns A request builder for creating requests to retrieve all `ReportFilter` entities.
     */
    ReportFilterRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(ReportFilter_1.ReportFilter);
    };
    /**
     * Returns a request builder for creating a `ReportFilter` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ReportFilter`.
     */
    ReportFilterRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(ReportFilter_1.ReportFilter, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `ReportFilter`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ReportFilter`.
     */
    ReportFilterRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(ReportFilter_1.ReportFilter, entity);
    };
    ReportFilterRequestBuilder.prototype.delete = function (codeOrEntity) {
        return new v4_1.DeleteRequestBuilder(ReportFilter_1.ReportFilter, codeOrEntity instanceof ReportFilter_1.ReportFilter ? codeOrEntity : { Code: codeOrEntity });
    };
    return ReportFilterRequestBuilder;
}(v4_1.RequestBuilder));
exports.ReportFilterRequestBuilder = ReportFilterRequestBuilder;
//# sourceMappingURL=ReportFilterRequestBuilder.js.map