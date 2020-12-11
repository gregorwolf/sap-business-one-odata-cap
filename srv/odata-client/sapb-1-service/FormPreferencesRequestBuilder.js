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
exports.FormPreferencesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var FormPreferences_1 = require("./FormPreferences");
/**
 * Request builder class for operations supported on the [[FormPreferences]] entity.
 */
var FormPreferencesRequestBuilder = /** @class */ (function (_super) {
    __extends(FormPreferencesRequestBuilder, _super);
    function FormPreferencesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FormPreferences` entity based on its keys.
     * @param user Key property. See [[FormPreferences.user]].
     * @param formId Key property. See [[FormPreferences.formId]].
     * @param itemNumber Key property. See [[FormPreferences.itemNumber]].
     * @param column Key property. See [[FormPreferences.column]].
     * @returns A request builder for creating requests to retrieve one `FormPreferences` entity based on its keys.
     */
    FormPreferencesRequestBuilder.prototype.getByKey = function (user, formId, itemNumber, column) {
        return new core_1.GetByKeyRequestBuilderV4(FormPreferences_1.FormPreferences, {
            User: user,
            FormID: formId,
            ItemNumber: itemNumber,
            Column: column
        });
    };
    /**
     * Returns a request builder for querying all `FormPreferences` entities.
     * @returns A request builder for creating requests to retrieve all `FormPreferences` entities.
     */
    FormPreferencesRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(FormPreferences_1.FormPreferences);
    };
    /**
     * Returns a request builder for creating a `FormPreferences` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `FormPreferences`.
     */
    FormPreferencesRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(FormPreferences_1.FormPreferences, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `FormPreferences`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `FormPreferences`.
     */
    FormPreferencesRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(FormPreferences_1.FormPreferences, entity);
    };
    FormPreferencesRequestBuilder.prototype.delete = function (userOrEntity, formId, itemNumber, column) {
        return new core_1.DeleteRequestBuilderV4(FormPreferences_1.FormPreferences, userOrEntity instanceof FormPreferences_1.FormPreferences ? userOrEntity : {
            User: userOrEntity,
            FormID: formId,
            ItemNumber: itemNumber,
            Column: column
        });
    };
    return FormPreferencesRequestBuilder;
}(core_1.RequestBuilder));
exports.FormPreferencesRequestBuilder = FormPreferencesRequestBuilder;
//# sourceMappingURL=FormPreferencesRequestBuilder.js.map