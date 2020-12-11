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
exports.ContactsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var Contacts_1 = require("./Contacts");
/**
 * Request builder class for operations supported on the [[Contacts]] entity.
 */
var ContactsRequestBuilder = /** @class */ (function (_super) {
    __extends(ContactsRequestBuilder, _super);
    function ContactsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Contacts` entity based on its keys.
     * @param contactCode Key property. See [[Contacts.contactCode]].
     * @returns A request builder for creating requests to retrieve one `Contacts` entity based on its keys.
     */
    ContactsRequestBuilder.prototype.getByKey = function (contactCode) {
        return new core_1.GetByKeyRequestBuilderV4(Contacts_1.Contacts, { ContactCode: contactCode });
    };
    /**
     * Returns a request builder for querying all `Contacts` entities.
     * @returns A request builder for creating requests to retrieve all `Contacts` entities.
     */
    ContactsRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(Contacts_1.Contacts);
    };
    /**
     * Returns a request builder for creating a `Contacts` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Contacts`.
     */
    ContactsRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(Contacts_1.Contacts, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `Contacts`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Contacts`.
     */
    ContactsRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(Contacts_1.Contacts, entity);
    };
    ContactsRequestBuilder.prototype.delete = function (contactCodeOrEntity) {
        return new core_1.DeleteRequestBuilderV4(Contacts_1.Contacts, contactCodeOrEntity instanceof Contacts_1.Contacts ? contactCodeOrEntity : { ContactCode: contactCodeOrEntity });
    };
    return ContactsRequestBuilder;
}(core_1.RequestBuilder));
exports.ContactsRequestBuilder = ContactsRequestBuilder;
//# sourceMappingURL=ContactsRequestBuilder.js.map