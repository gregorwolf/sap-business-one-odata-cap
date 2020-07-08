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
exports.ExternalCall = exports.ExternalCallField = exports.createExternalCall = void 0;
var CallArgument_1 = require("./CallArgument");
var CallMessage_1 = require("./CallMessage");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[ExternalCall.build]] instead.
 */
function createExternalCall(json) {
    return ExternalCall.build(json);
}
exports.createExternalCall = createExternalCall;
/**
 * ExternalCallField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ExternalCallField = /** @class */ (function (_super) {
    __extends(ExternalCallField, _super);
    function ExternalCallField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ExternalCall.id]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.id = new v4_1.ComplexTypeNumberPropertyField('ID', _this, 'Edm.Int32');
        /**
         * Representation of the [[ExternalCall.category]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.category = new v4_1.ComplexTypeNumberPropertyField('Category', _this, 'Edm.Int32');
        /**
         * Representation of the [[ExternalCall.creationDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.creationDate = new v4_1.ComplexTypeDatePropertyField('CreationDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ExternalCall.creationTime]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.creationTime = new v4_1.ComplexTypeNumberPropertyField('CreationTime', _this, 'Edm.Int32');
        /**
         * Representation of the [[ExternalCall.lastUpdateDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lastUpdateDate = new v4_1.ComplexTypeDatePropertyField('LastUpdateDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ExternalCall.lastUpdateTime]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lastUpdateTime = new v4_1.ComplexTypeNumberPropertyField('LastUpdateTime', _this, 'Edm.Int32');
        /**
         * Representation of the [[ExternalCall.lastUpdateUserCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lastUpdateUserCode = new v4_1.ComplexTypeStringPropertyField('LastUpdateUserCode', _this, 'Edm.String');
        /**
         * Representation of the [[ExternalCall.callArguments]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.callArguments = new CallArgument_1.CallArgumentField('CallArguments', _this);
        /**
         * Representation of the [[ExternalCall.callMessages]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.callMessages = new CallMessage_1.CallMessageField('CallMessages', _this);
        return _this;
    }
    return ExternalCallField;
}(v4_1.ComplexTypeField));
exports.ExternalCallField = ExternalCallField;
var ExternalCall;
(function (ExternalCall) {
    function build(json) {
        return v4_1.createComplexType(json, {
            ID: function (id) { return ({ id: v4_1.edmToTs(id, 'Edm.Int32') }); },
            Category: function (category) { return ({ category: v4_1.edmToTs(category, 'Edm.Int32') }); },
            CreationDate: function (creationDate) { return ({ creationDate: v4_1.edmToTs(creationDate, 'Edm.DateTimeOffset') }); },
            CreationTime: function (creationTime) { return ({ creationTime: v4_1.edmToTs(creationTime, 'Edm.Int32') }); },
            LastUpdateDate: function (lastUpdateDate) { return ({ lastUpdateDate: v4_1.edmToTs(lastUpdateDate, 'Edm.DateTimeOffset') }); },
            LastUpdateTime: function (lastUpdateTime) { return ({ lastUpdateTime: v4_1.edmToTs(lastUpdateTime, 'Edm.Int32') }); },
            LastUpdateUserCode: function (lastUpdateUserCode) { return ({ lastUpdateUserCode: v4_1.edmToTs(lastUpdateUserCode, 'Edm.String') }); },
            CallArguments: function (callArguments) { return ({ callArguments: CallArgument_1.CallArgument.build(callArguments) }); },
            CallMessages: function (callMessages) { return ({ callMessages: CallMessage_1.CallMessage.build(callMessages) }); }
        });
    }
    ExternalCall.build = build;
})(ExternalCall = exports.ExternalCall || (exports.ExternalCall = {}));
//# sourceMappingURL=ExternalCall.js.map