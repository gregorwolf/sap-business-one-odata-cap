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
exports.TargetGroupsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var TargetGroups_1 = require("./TargetGroups");
/**
 * Request builder class for operations supported on the [[TargetGroups]] entity.
 */
var TargetGroupsRequestBuilder = /** @class */ (function (_super) {
    __extends(TargetGroupsRequestBuilder, _super);
    function TargetGroupsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `TargetGroups` entity based on its keys.
     * @param targetGroupCode Key property. See [[TargetGroups.targetGroupCode]].
     * @returns A request builder for creating requests to retrieve one `TargetGroups` entity based on its keys.
     */
    TargetGroupsRequestBuilder.prototype.getByKey = function (targetGroupCode) {
        return new core_1.GetByKeyRequestBuilderV4(TargetGroups_1.TargetGroups, { TargetGroupCode: targetGroupCode });
    };
    /**
     * Returns a request builder for querying all `TargetGroups` entities.
     * @returns A request builder for creating requests to retrieve all `TargetGroups` entities.
     */
    TargetGroupsRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(TargetGroups_1.TargetGroups);
    };
    /**
     * Returns a request builder for creating a `TargetGroups` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `TargetGroups`.
     */
    TargetGroupsRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(TargetGroups_1.TargetGroups, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `TargetGroups`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `TargetGroups`.
     */
    TargetGroupsRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(TargetGroups_1.TargetGroups, entity);
    };
    TargetGroupsRequestBuilder.prototype.delete = function (targetGroupCodeOrEntity) {
        return new core_1.DeleteRequestBuilderV4(TargetGroups_1.TargetGroups, targetGroupCodeOrEntity instanceof TargetGroups_1.TargetGroups ? targetGroupCodeOrEntity : { TargetGroupCode: targetGroupCodeOrEntity });
    };
    return TargetGroupsRequestBuilder;
}(core_1.RequestBuilder));
exports.TargetGroupsRequestBuilder = TargetGroupsRequestBuilder;
//# sourceMappingURL=TargetGroupsRequestBuilder.js.map