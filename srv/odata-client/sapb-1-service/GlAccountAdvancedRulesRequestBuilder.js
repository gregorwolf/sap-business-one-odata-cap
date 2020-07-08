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
exports.GlAccountAdvancedRulesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var GlAccountAdvancedRules_1 = require("./GlAccountAdvancedRules");
/**
 * Request builder class for operations supported on the [[GlAccountAdvancedRules]] entity.
 */
var GlAccountAdvancedRulesRequestBuilder = /** @class */ (function (_super) {
    __extends(GlAccountAdvancedRulesRequestBuilder, _super);
    function GlAccountAdvancedRulesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `GlAccountAdvancedRules` entity based on its keys.
     * @param absoluteEntry Key property. See [[GlAccountAdvancedRules.absoluteEntry]].
     * @returns A request builder for creating requests to retrieve one `GlAccountAdvancedRules` entity based on its keys.
     */
    GlAccountAdvancedRulesRequestBuilder.prototype.getByKey = function (absoluteEntry) {
        return new v4_1.GetByKeyRequestBuilder(GlAccountAdvancedRules_1.GlAccountAdvancedRules, { AbsoluteEntry: absoluteEntry });
    };
    /**
     * Returns a request builder for querying all `GlAccountAdvancedRules` entities.
     * @returns A request builder for creating requests to retrieve all `GlAccountAdvancedRules` entities.
     */
    GlAccountAdvancedRulesRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(GlAccountAdvancedRules_1.GlAccountAdvancedRules);
    };
    /**
     * Returns a request builder for creating a `GlAccountAdvancedRules` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `GlAccountAdvancedRules`.
     */
    GlAccountAdvancedRulesRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(GlAccountAdvancedRules_1.GlAccountAdvancedRules, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `GlAccountAdvancedRules`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `GlAccountAdvancedRules`.
     */
    GlAccountAdvancedRulesRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(GlAccountAdvancedRules_1.GlAccountAdvancedRules, entity);
    };
    GlAccountAdvancedRulesRequestBuilder.prototype.delete = function (absoluteEntryOrEntity) {
        return new v4_1.DeleteRequestBuilder(GlAccountAdvancedRules_1.GlAccountAdvancedRules, absoluteEntryOrEntity instanceof GlAccountAdvancedRules_1.GlAccountAdvancedRules ? absoluteEntryOrEntity : { AbsoluteEntry: absoluteEntryOrEntity });
    };
    return GlAccountAdvancedRulesRequestBuilder;
}(v4_1.RequestBuilder));
exports.GlAccountAdvancedRulesRequestBuilder = GlAccountAdvancedRulesRequestBuilder;
//# sourceMappingURL=GlAccountAdvancedRulesRequestBuilder.js.map