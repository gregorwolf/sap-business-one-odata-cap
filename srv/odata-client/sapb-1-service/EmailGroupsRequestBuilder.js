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
exports.EmailGroupsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var EmailGroups_1 = require("./EmailGroups");
/**
 * Request builder class for operations supported on the [[EmailGroups]] entity.
 */
var EmailGroupsRequestBuilder = /** @class */ (function (_super) {
    __extends(EmailGroupsRequestBuilder, _super);
    function EmailGroupsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `EmailGroups` entity based on its keys.
     * @param emailGroupCode Key property. See [[EmailGroups.emailGroupCode]].
     * @returns A request builder for creating requests to retrieve one `EmailGroups` entity based on its keys.
     */
    EmailGroupsRequestBuilder.prototype.getByKey = function (emailGroupCode) {
        return new v4_1.GetByKeyRequestBuilder(EmailGroups_1.EmailGroups, { EmailGroupCode: emailGroupCode });
    };
    /**
     * Returns a request builder for querying all `EmailGroups` entities.
     * @returns A request builder for creating requests to retrieve all `EmailGroups` entities.
     */
    EmailGroupsRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(EmailGroups_1.EmailGroups);
    };
    /**
     * Returns a request builder for creating a `EmailGroups` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `EmailGroups`.
     */
    EmailGroupsRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(EmailGroups_1.EmailGroups, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `EmailGroups`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `EmailGroups`.
     */
    EmailGroupsRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(EmailGroups_1.EmailGroups, entity);
    };
    EmailGroupsRequestBuilder.prototype.delete = function (emailGroupCodeOrEntity) {
        return new v4_1.DeleteRequestBuilder(EmailGroups_1.EmailGroups, emailGroupCodeOrEntity instanceof EmailGroups_1.EmailGroups ? emailGroupCodeOrEntity : { EmailGroupCode: emailGroupCodeOrEntity });
    };
    return EmailGroupsRequestBuilder;
}(v4_1.RequestBuilder));
exports.EmailGroupsRequestBuilder = EmailGroupsRequestBuilder;
//# sourceMappingURL=EmailGroupsRequestBuilder.js.map