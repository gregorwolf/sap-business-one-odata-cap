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
exports.ChooseFromListRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var ChooseFromList_1 = require("./ChooseFromList");
/**
 * Request builder class for operations supported on the [[ChooseFromList]] entity.
 */
var ChooseFromListRequestBuilder = /** @class */ (function (_super) {
    __extends(ChooseFromListRequestBuilder, _super);
    function ChooseFromListRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `ChooseFromList` entity based on its keys.
     * @param objectName Key property. See [[ChooseFromList.objectName]].
     * @returns A request builder for creating requests to retrieve one `ChooseFromList` entity based on its keys.
     */
    ChooseFromListRequestBuilder.prototype.getByKey = function (objectName) {
        return new v4_1.GetByKeyRequestBuilder(ChooseFromList_1.ChooseFromList, { ObjectName: objectName });
    };
    /**
     * Returns a request builder for querying all `ChooseFromList` entities.
     * @returns A request builder for creating requests to retrieve all `ChooseFromList` entities.
     */
    ChooseFromListRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(ChooseFromList_1.ChooseFromList);
    };
    /**
     * Returns a request builder for creating a `ChooseFromList` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ChooseFromList`.
     */
    ChooseFromListRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(ChooseFromList_1.ChooseFromList, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `ChooseFromList`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ChooseFromList`.
     */
    ChooseFromListRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(ChooseFromList_1.ChooseFromList, entity);
    };
    ChooseFromListRequestBuilder.prototype.delete = function (objectNameOrEntity) {
        return new v4_1.DeleteRequestBuilder(ChooseFromList_1.ChooseFromList, objectNameOrEntity instanceof ChooseFromList_1.ChooseFromList ? objectNameOrEntity : { ObjectName: objectNameOrEntity });
    };
    return ChooseFromListRequestBuilder;
}(v4_1.RequestBuilder));
exports.ChooseFromListRequestBuilder = ChooseFromListRequestBuilder;
//# sourceMappingURL=ChooseFromListRequestBuilder.js.map