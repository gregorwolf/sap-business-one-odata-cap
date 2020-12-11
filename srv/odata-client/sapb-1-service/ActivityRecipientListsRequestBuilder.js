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
exports.ActivityRecipientListsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var ActivityRecipientLists_1 = require("./ActivityRecipientLists");
/**
 * Request builder class for operations supported on the [[ActivityRecipientLists]] entity.
 */
var ActivityRecipientListsRequestBuilder = /** @class */ (function (_super) {
    __extends(ActivityRecipientListsRequestBuilder, _super);
    function ActivityRecipientListsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `ActivityRecipientLists` entity based on its keys.
     * @param code Key property. See [[ActivityRecipientLists.code]].
     * @returns A request builder for creating requests to retrieve one `ActivityRecipientLists` entity based on its keys.
     */
    ActivityRecipientListsRequestBuilder.prototype.getByKey = function (code) {
        return new core_1.GetByKeyRequestBuilderV4(ActivityRecipientLists_1.ActivityRecipientLists, { Code: code });
    };
    /**
     * Returns a request builder for querying all `ActivityRecipientLists` entities.
     * @returns A request builder for creating requests to retrieve all `ActivityRecipientLists` entities.
     */
    ActivityRecipientListsRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(ActivityRecipientLists_1.ActivityRecipientLists);
    };
    /**
     * Returns a request builder for creating a `ActivityRecipientLists` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ActivityRecipientLists`.
     */
    ActivityRecipientListsRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(ActivityRecipientLists_1.ActivityRecipientLists, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `ActivityRecipientLists`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ActivityRecipientLists`.
     */
    ActivityRecipientListsRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(ActivityRecipientLists_1.ActivityRecipientLists, entity);
    };
    ActivityRecipientListsRequestBuilder.prototype.delete = function (codeOrEntity) {
        return new core_1.DeleteRequestBuilderV4(ActivityRecipientLists_1.ActivityRecipientLists, codeOrEntity instanceof ActivityRecipientLists_1.ActivityRecipientLists ? codeOrEntity : { Code: codeOrEntity });
    };
    return ActivityRecipientListsRequestBuilder;
}(core_1.RequestBuilder));
exports.ActivityRecipientListsRequestBuilder = ActivityRecipientListsRequestBuilder;
//# sourceMappingURL=ActivityRecipientListsRequestBuilder.js.map