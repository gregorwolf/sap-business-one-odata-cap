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
exports.ChangeLogDifferenceParams = exports.ChangeLogDifferenceParamsField = exports.createChangeLogDifferenceParams = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[ChangeLogDifferenceParams.build]] instead.
 */
function createChangeLogDifferenceParams(json) {
    return ChangeLogDifferenceParams.build(json);
}
exports.createChangeLogDifferenceParams = createChangeLogDifferenceParams;
/**
 * ChangeLogDifferenceParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ChangeLogDifferenceParamsField = /** @class */ (function (_super) {
    __extends(ChangeLogDifferenceParamsField, _super);
    function ChangeLogDifferenceParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ChangeLogDifferenceParams.date]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.date = new v4_1.ComplexTypeDatePropertyField('Date', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ChangeLogDifferenceParams.changedField]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.changedField = new v4_1.ComplexTypeStringPropertyField('ChangedField', _this, 'Edm.String');
        /**
         * Representation of the [[ChangeLogDifferenceParams.oldValue]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.oldValue = new v4_1.ComplexTypeStringPropertyField('OldValue', _this, 'Edm.String');
        /**
         * Representation of the [[ChangeLogDifferenceParams.newValue]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.newValue = new v4_1.ComplexTypeStringPropertyField('NewValue', _this, 'Edm.String');
        /**
         * Representation of the [[ChangeLogDifferenceParams.userName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.userName = new v4_1.ComplexTypeStringPropertyField('UserName', _this, 'Edm.String');
        /**
         * Representation of the [[ChangeLogDifferenceParams.arrayOffset]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.arrayOffset = new v4_1.ComplexTypeNumberPropertyField('ArrayOffset', _this, 'Edm.Int32');
        /**
         * Representation of the [[ChangeLogDifferenceParams.lineNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNumber = new v4_1.ComplexTypeStringPropertyField('LineNumber', _this, 'Edm.String');
        return _this;
    }
    return ChangeLogDifferenceParamsField;
}(v4_1.ComplexTypeField));
exports.ChangeLogDifferenceParamsField = ChangeLogDifferenceParamsField;
var ChangeLogDifferenceParams;
(function (ChangeLogDifferenceParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            Date: function (date) { return ({ date: v4_1.edmToTs(date, 'Edm.DateTimeOffset') }); },
            ChangedField: function (changedField) { return ({ changedField: v4_1.edmToTs(changedField, 'Edm.String') }); },
            OldValue: function (oldValue) { return ({ oldValue: v4_1.edmToTs(oldValue, 'Edm.String') }); },
            NewValue: function (newValue) { return ({ newValue: v4_1.edmToTs(newValue, 'Edm.String') }); },
            UserName: function (userName) { return ({ userName: v4_1.edmToTs(userName, 'Edm.String') }); },
            ArrayOffset: function (arrayOffset) { return ({ arrayOffset: v4_1.edmToTs(arrayOffset, 'Edm.Int32') }); },
            LineNumber: function (lineNumber) { return ({ lineNumber: v4_1.edmToTs(lineNumber, 'Edm.String') }); }
        });
    }
    ChangeLogDifferenceParams.build = build;
})(ChangeLogDifferenceParams = exports.ChangeLogDifferenceParams || (exports.ChangeLogDifferenceParams = {}));
//# sourceMappingURL=ChangeLogDifferenceParams.js.map