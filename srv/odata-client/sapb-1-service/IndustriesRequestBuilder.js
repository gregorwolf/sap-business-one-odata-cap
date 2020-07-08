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
exports.IndustriesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var Industries_1 = require("./Industries");
/**
 * Request builder class for operations supported on the [[Industries]] entity.
 */
var IndustriesRequestBuilder = /** @class */ (function (_super) {
    __extends(IndustriesRequestBuilder, _super);
    function IndustriesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Industries` entity based on its keys.
     * @param industryCode Key property. See [[Industries.industryCode]].
     * @returns A request builder for creating requests to retrieve one `Industries` entity based on its keys.
     */
    IndustriesRequestBuilder.prototype.getByKey = function (industryCode) {
        return new v4_1.GetByKeyRequestBuilder(Industries_1.Industries, { IndustryCode: industryCode });
    };
    /**
     * Returns a request builder for querying all `Industries` entities.
     * @returns A request builder for creating requests to retrieve all `Industries` entities.
     */
    IndustriesRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(Industries_1.Industries);
    };
    /**
     * Returns a request builder for creating a `Industries` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Industries`.
     */
    IndustriesRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(Industries_1.Industries, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `Industries`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Industries`.
     */
    IndustriesRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(Industries_1.Industries, entity);
    };
    IndustriesRequestBuilder.prototype.delete = function (industryCodeOrEntity) {
        return new v4_1.DeleteRequestBuilder(Industries_1.Industries, industryCodeOrEntity instanceof Industries_1.Industries ? industryCodeOrEntity : { IndustryCode: industryCodeOrEntity });
    };
    return IndustriesRequestBuilder;
}(v4_1.RequestBuilder));
exports.IndustriesRequestBuilder = IndustriesRequestBuilder;
//# sourceMappingURL=IndustriesRequestBuilder.js.map