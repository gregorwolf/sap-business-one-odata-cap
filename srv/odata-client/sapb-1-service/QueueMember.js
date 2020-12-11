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
exports.QueueMember = exports.QueueMemberField = exports.createQueueMember = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[QueueMember.build]] instead.
 */
function createQueueMember(json) {
    return QueueMember.build(json);
}
exports.createQueueMember = createQueueMember;
/**
 * QueueMemberField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var QueueMemberField = /** @class */ (function (_super) {
    __extends(QueueMemberField, _super);
    /**
     * Creates an instance of QueueMemberField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function QueueMemberField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, QueueMember) || this;
        /**
         * Representation of the [[QueueMember.queueId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.queueId = new core_1.ComplexTypeStringPropertyField('QueueID', _this, 'Edm.String');
        /**
         * Representation of the [[QueueMember.memberUserId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.memberUserId = new core_1.ComplexTypeNumberPropertyField('MemberUserID', _this, 'Edm.Int32');
        return _this;
    }
    return QueueMemberField;
}(core_1.ComplexTypeField));
exports.QueueMemberField = QueueMemberField;
var QueueMember;
(function (QueueMember) {
    /**
     * Metadata information on all properties of the `QueueMember` complex type.
     */
    QueueMember._propertyMetadata = [{
            originalName: 'QueueID',
            name: 'queueId',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'MemberUserID',
            name: 'memberUserId',
            type: 'Edm.Int32',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, QueueMember);
    }
    QueueMember.build = build;
})(QueueMember = exports.QueueMember || (exports.QueueMember = {}));
//# sourceMappingURL=QueueMember.js.map