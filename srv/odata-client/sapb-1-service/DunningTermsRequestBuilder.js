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
exports.DunningTermsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var DunningTerms_1 = require("./DunningTerms");
/**
 * Request builder class for operations supported on the [[DunningTerms]] entity.
 */
var DunningTermsRequestBuilder = /** @class */ (function (_super) {
    __extends(DunningTermsRequestBuilder, _super);
    function DunningTermsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `DunningTerms` entity based on its keys.
     * @param code Key property. See [[DunningTerms.code]].
     * @returns A request builder for creating requests to retrieve one `DunningTerms` entity based on its keys.
     */
    DunningTermsRequestBuilder.prototype.getByKey = function (code) {
        return new core_1.GetByKeyRequestBuilderV4(DunningTerms_1.DunningTerms, { Code: code });
    };
    /**
     * Returns a request builder for querying all `DunningTerms` entities.
     * @returns A request builder for creating requests to retrieve all `DunningTerms` entities.
     */
    DunningTermsRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(DunningTerms_1.DunningTerms);
    };
    /**
     * Returns a request builder for creating a `DunningTerms` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `DunningTerms`.
     */
    DunningTermsRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(DunningTerms_1.DunningTerms, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `DunningTerms`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `DunningTerms`.
     */
    DunningTermsRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(DunningTerms_1.DunningTerms, entity);
    };
    DunningTermsRequestBuilder.prototype.delete = function (codeOrEntity) {
        return new core_1.DeleteRequestBuilderV4(DunningTerms_1.DunningTerms, codeOrEntity instanceof DunningTerms_1.DunningTerms ? codeOrEntity : { Code: codeOrEntity });
    };
    return DunningTermsRequestBuilder;
}(core_1.RequestBuilder));
exports.DunningTermsRequestBuilder = DunningTermsRequestBuilder;
//# sourceMappingURL=DunningTermsRequestBuilder.js.map