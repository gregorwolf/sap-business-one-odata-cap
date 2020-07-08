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
exports.CheckInParams = exports.CheckInParamsField = exports.createCheckInParams = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[CheckInParams.build]] instead.
 */
function createCheckInParams(json) {
    return CheckInParams.build(json);
}
exports.createCheckInParams = createCheckInParams;
/**
 * CheckInParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var CheckInParamsField = /** @class */ (function (_super) {
    __extends(CheckInParamsField, _super);
    function CheckInParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[CheckInParams.lineNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNumber = new v4_1.ComplexTypeNumberPropertyField('LineNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[CheckInParams.date]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.date = new v4_1.ComplexTypeDatePropertyField('Date', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[CheckInParams.time]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.time = new v4_1.ComplexTypeTimePropertyField('Time', _this, 'Edm.TimeOfDay');
        /**
         * Representation of the [[CheckInParams.location]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.location = new v4_1.ComplexTypeStringPropertyField('Location', _this, 'Edm.String');
        /**
         * Representation of the [[CheckInParams.latitude]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.latitude = new v4_1.ComplexTypeStringPropertyField('Latitude', _this, 'Edm.String');
        /**
         * Representation of the [[CheckInParams.longitude]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.longitude = new v4_1.ComplexTypeStringPropertyField('Longitude', _this, 'Edm.String');
        /**
         * Representation of the [[CheckInParams.handledBy]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.handledBy = new v4_1.ComplexTypeNumberPropertyField('HandledBy', _this, 'Edm.Int32');
        /**
         * Representation of the [[CheckInParams.handledByEmployee]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.handledByEmployee = new v4_1.ComplexTypeNumberPropertyField('HandledByEmployee', _this, 'Edm.Int32');
        return _this;
    }
    return CheckInParamsField;
}(v4_1.ComplexTypeField));
exports.CheckInParamsField = CheckInParamsField;
var CheckInParams;
(function (CheckInParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            LineNumber: function (lineNumber) { return ({ lineNumber: v4_1.edmToTs(lineNumber, 'Edm.Int32') }); },
            Date: function (date) { return ({ date: v4_1.edmToTs(date, 'Edm.DateTimeOffset') }); },
            Time: function (time) { return ({ time: v4_1.edmToTs(time, 'Edm.TimeOfDay') }); },
            Location: function (location) { return ({ location: v4_1.edmToTs(location, 'Edm.String') }); },
            Latitude: function (latitude) { return ({ latitude: v4_1.edmToTs(latitude, 'Edm.String') }); },
            Longitude: function (longitude) { return ({ longitude: v4_1.edmToTs(longitude, 'Edm.String') }); },
            HandledBy: function (handledBy) { return ({ handledBy: v4_1.edmToTs(handledBy, 'Edm.Int32') }); },
            HandledByEmployee: function (handledByEmployee) { return ({ handledByEmployee: v4_1.edmToTs(handledByEmployee, 'Edm.Int32') }); }
        });
    }
    CheckInParams.build = build;
})(CheckInParams = exports.CheckInParams || (exports.CheckInParams = {}));
//# sourceMappingURL=CheckInParams.js.map