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
exports.RelationshipsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var Relationships_1 = require("./Relationships");
/**
 * Request builder class for operations supported on the [[Relationships]] entity.
 */
var RelationshipsRequestBuilder = /** @class */ (function (_super) {
    __extends(RelationshipsRequestBuilder, _super);
    function RelationshipsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Relationships` entity based on its keys.
     * @param relationshipCode Key property. See [[Relationships.relationshipCode]].
     * @returns A request builder for creating requests to retrieve one `Relationships` entity based on its keys.
     */
    RelationshipsRequestBuilder.prototype.getByKey = function (relationshipCode) {
        return new v4_1.GetByKeyRequestBuilder(Relationships_1.Relationships, { RelationshipCode: relationshipCode });
    };
    /**
     * Returns a request builder for querying all `Relationships` entities.
     * @returns A request builder for creating requests to retrieve all `Relationships` entities.
     */
    RelationshipsRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(Relationships_1.Relationships);
    };
    /**
     * Returns a request builder for creating a `Relationships` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Relationships`.
     */
    RelationshipsRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(Relationships_1.Relationships, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `Relationships`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Relationships`.
     */
    RelationshipsRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(Relationships_1.Relationships, entity);
    };
    RelationshipsRequestBuilder.prototype.delete = function (relationshipCodeOrEntity) {
        return new v4_1.DeleteRequestBuilder(Relationships_1.Relationships, relationshipCodeOrEntity instanceof Relationships_1.Relationships ? relationshipCodeOrEntity : { RelationshipCode: relationshipCodeOrEntity });
    };
    return RelationshipsRequestBuilder;
}(v4_1.RequestBuilder));
exports.RelationshipsRequestBuilder = RelationshipsRequestBuilder;
//# sourceMappingURL=RelationshipsRequestBuilder.js.map