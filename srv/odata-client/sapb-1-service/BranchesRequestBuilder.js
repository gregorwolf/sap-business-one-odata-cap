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
exports.BranchesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var Branches_1 = require("./Branches");
/**
 * Request builder class for operations supported on the [[Branches]] entity.
 */
var BranchesRequestBuilder = /** @class */ (function (_super) {
    __extends(BranchesRequestBuilder, _super);
    function BranchesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Branches` entity based on its keys.
     * @param code Key property. See [[Branches.code]].
     * @returns A request builder for creating requests to retrieve one `Branches` entity based on its keys.
     */
    BranchesRequestBuilder.prototype.getByKey = function (code) {
        return new core_1.GetByKeyRequestBuilderV4(Branches_1.Branches, { Code: code });
    };
    /**
     * Returns a request builder for querying all `Branches` entities.
     * @returns A request builder for creating requests to retrieve all `Branches` entities.
     */
    BranchesRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(Branches_1.Branches);
    };
    /**
     * Returns a request builder for creating a `Branches` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Branches`.
     */
    BranchesRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(Branches_1.Branches, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `Branches`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Branches`.
     */
    BranchesRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(Branches_1.Branches, entity);
    };
    BranchesRequestBuilder.prototype.delete = function (codeOrEntity) {
        return new core_1.DeleteRequestBuilderV4(Branches_1.Branches, codeOrEntity instanceof Branches_1.Branches ? codeOrEntity : { Code: codeOrEntity });
    };
    return BranchesRequestBuilder;
}(core_1.RequestBuilder));
exports.BranchesRequestBuilder = BranchesRequestBuilder;
//# sourceMappingURL=BranchesRequestBuilder.js.map