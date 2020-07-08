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
exports.ContractTemplatesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var ContractTemplates_1 = require("./ContractTemplates");
/**
 * Request builder class for operations supported on the [[ContractTemplates]] entity.
 */
var ContractTemplatesRequestBuilder = /** @class */ (function (_super) {
    __extends(ContractTemplatesRequestBuilder, _super);
    function ContractTemplatesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `ContractTemplates` entity based on its keys.
     * @param templateName Key property. See [[ContractTemplates.templateName]].
     * @returns A request builder for creating requests to retrieve one `ContractTemplates` entity based on its keys.
     */
    ContractTemplatesRequestBuilder.prototype.getByKey = function (templateName) {
        return new v4_1.GetByKeyRequestBuilder(ContractTemplates_1.ContractTemplates, { TemplateName: templateName });
    };
    /**
     * Returns a request builder for querying all `ContractTemplates` entities.
     * @returns A request builder for creating requests to retrieve all `ContractTemplates` entities.
     */
    ContractTemplatesRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(ContractTemplates_1.ContractTemplates);
    };
    /**
     * Returns a request builder for creating a `ContractTemplates` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ContractTemplates`.
     */
    ContractTemplatesRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(ContractTemplates_1.ContractTemplates, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `ContractTemplates`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ContractTemplates`.
     */
    ContractTemplatesRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(ContractTemplates_1.ContractTemplates, entity);
    };
    ContractTemplatesRequestBuilder.prototype.delete = function (templateNameOrEntity) {
        return new v4_1.DeleteRequestBuilder(ContractTemplates_1.ContractTemplates, templateNameOrEntity instanceof ContractTemplates_1.ContractTemplates ? templateNameOrEntity : { TemplateName: templateNameOrEntity });
    };
    return ContractTemplatesRequestBuilder;
}(v4_1.RequestBuilder));
exports.ContractTemplatesRequestBuilder = ContractTemplatesRequestBuilder;
//# sourceMappingURL=ContractTemplatesRequestBuilder.js.map