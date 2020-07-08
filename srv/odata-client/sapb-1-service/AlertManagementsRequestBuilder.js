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
exports.AlertManagementsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var AlertManagements_1 = require("./AlertManagements");
/**
 * Request builder class for operations supported on the [[AlertManagements]] entity.
 */
var AlertManagementsRequestBuilder = /** @class */ (function (_super) {
    __extends(AlertManagementsRequestBuilder, _super);
    function AlertManagementsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `AlertManagements` entity based on its keys.
     * @param code Key property. See [[AlertManagements.code]].
     * @returns A request builder for creating requests to retrieve one `AlertManagements` entity based on its keys.
     */
    AlertManagementsRequestBuilder.prototype.getByKey = function (code) {
        return new v4_1.GetByKeyRequestBuilder(AlertManagements_1.AlertManagements, { Code: code });
    };
    /**
     * Returns a request builder for querying all `AlertManagements` entities.
     * @returns A request builder for creating requests to retrieve all `AlertManagements` entities.
     */
    AlertManagementsRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(AlertManagements_1.AlertManagements);
    };
    /**
     * Returns a request builder for creating a `AlertManagements` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `AlertManagements`.
     */
    AlertManagementsRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(AlertManagements_1.AlertManagements, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `AlertManagements`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `AlertManagements`.
     */
    AlertManagementsRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(AlertManagements_1.AlertManagements, entity);
    };
    AlertManagementsRequestBuilder.prototype.delete = function (codeOrEntity) {
        return new v4_1.DeleteRequestBuilder(AlertManagements_1.AlertManagements, codeOrEntity instanceof AlertManagements_1.AlertManagements ? codeOrEntity : { Code: codeOrEntity });
    };
    return AlertManagementsRequestBuilder;
}(v4_1.RequestBuilder));
exports.AlertManagementsRequestBuilder = AlertManagementsRequestBuilder;
//# sourceMappingURL=AlertManagementsRequestBuilder.js.map