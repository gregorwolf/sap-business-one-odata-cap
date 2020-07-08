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
exports.TrackingNotesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var TrackingNotes_1 = require("./TrackingNotes");
/**
 * Request builder class for operations supported on the [[TrackingNotes]] entity.
 */
var TrackingNotesRequestBuilder = /** @class */ (function (_super) {
    __extends(TrackingNotesRequestBuilder, _super);
    function TrackingNotesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `TrackingNotes` entity based on its keys.
     * @param trackingNoteNumber Key property. See [[TrackingNotes.trackingNoteNumber]].
     * @returns A request builder for creating requests to retrieve one `TrackingNotes` entity based on its keys.
     */
    TrackingNotesRequestBuilder.prototype.getByKey = function (trackingNoteNumber) {
        return new v4_1.GetByKeyRequestBuilder(TrackingNotes_1.TrackingNotes, { TrackingNoteNumber: trackingNoteNumber });
    };
    /**
     * Returns a request builder for querying all `TrackingNotes` entities.
     * @returns A request builder for creating requests to retrieve all `TrackingNotes` entities.
     */
    TrackingNotesRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(TrackingNotes_1.TrackingNotes);
    };
    /**
     * Returns a request builder for creating a `TrackingNotes` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `TrackingNotes`.
     */
    TrackingNotesRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(TrackingNotes_1.TrackingNotes, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `TrackingNotes`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `TrackingNotes`.
     */
    TrackingNotesRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(TrackingNotes_1.TrackingNotes, entity);
    };
    TrackingNotesRequestBuilder.prototype.delete = function (trackingNoteNumberOrEntity) {
        return new v4_1.DeleteRequestBuilder(TrackingNotes_1.TrackingNotes, trackingNoteNumberOrEntity instanceof TrackingNotes_1.TrackingNotes ? trackingNoteNumberOrEntity : { TrackingNoteNumber: trackingNoteNumberOrEntity });
    };
    return TrackingNotesRequestBuilder;
}(v4_1.RequestBuilder));
exports.TrackingNotesRequestBuilder = TrackingNotesRequestBuilder;
//# sourceMappingURL=TrackingNotesRequestBuilder.js.map