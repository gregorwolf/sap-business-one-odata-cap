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
exports.WitholdingTaxDefinitionRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var WitholdingTaxDefinition_1 = require("./WitholdingTaxDefinition");
/**
 * Request builder class for operations supported on the [[WitholdingTaxDefinition]] entity.
 */
var WitholdingTaxDefinitionRequestBuilder = /** @class */ (function (_super) {
    __extends(WitholdingTaxDefinitionRequestBuilder, _super);
    function WitholdingTaxDefinitionRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `WitholdingTaxDefinition` entity based on its keys.
     * @param absEntry Key property. See [[WitholdingTaxDefinition.absEntry]].
     * @returns A request builder for creating requests to retrieve one `WitholdingTaxDefinition` entity based on its keys.
     */
    WitholdingTaxDefinitionRequestBuilder.prototype.getByKey = function (absEntry) {
        return new v4_1.GetByKeyRequestBuilder(WitholdingTaxDefinition_1.WitholdingTaxDefinition, { AbsEntry: absEntry });
    };
    /**
     * Returns a request builder for querying all `WitholdingTaxDefinition` entities.
     * @returns A request builder for creating requests to retrieve all `WitholdingTaxDefinition` entities.
     */
    WitholdingTaxDefinitionRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(WitholdingTaxDefinition_1.WitholdingTaxDefinition);
    };
    /**
     * Returns a request builder for creating a `WitholdingTaxDefinition` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `WitholdingTaxDefinition`.
     */
    WitholdingTaxDefinitionRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(WitholdingTaxDefinition_1.WitholdingTaxDefinition, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `WitholdingTaxDefinition`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `WitholdingTaxDefinition`.
     */
    WitholdingTaxDefinitionRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(WitholdingTaxDefinition_1.WitholdingTaxDefinition, entity);
    };
    WitholdingTaxDefinitionRequestBuilder.prototype.delete = function (absEntryOrEntity) {
        return new v4_1.DeleteRequestBuilder(WitholdingTaxDefinition_1.WitholdingTaxDefinition, absEntryOrEntity instanceof WitholdingTaxDefinition_1.WitholdingTaxDefinition ? absEntryOrEntity : { AbsEntry: absEntryOrEntity });
    };
    return WitholdingTaxDefinitionRequestBuilder;
}(v4_1.RequestBuilder));
exports.WitholdingTaxDefinitionRequestBuilder = WitholdingTaxDefinitionRequestBuilder;
//# sourceMappingURL=WitholdingTaxDefinitionRequestBuilder.js.map