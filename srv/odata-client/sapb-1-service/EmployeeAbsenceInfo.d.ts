import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * EmployeeAbsenceInfo
 */
export interface EmployeeAbsenceInfo {
    /**
     * Employee Id.
     * @nullable
     */
    employeeId?: number;
    /**
     * Line Num.
     * @nullable
     */
    lineNum?: number;
    /**
     * From Date.
     * @nullable
     */
    fromDate?: Moment;
    /**
     * To Date.
     * @nullable
     */
    toDate?: Moment;
    /**
     * Reason.
     * @nullable
     */
    reason?: string;
    /**
     * Approved By.
     * @nullable
     */
    approvedBy?: string;
    /**
     * Confirmer Number.
     * @nullable
     */
    confirmerNumber?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[EmployeeAbsenceInfo.build]] instead.
 */
export declare function createEmployeeAbsenceInfo(json: any): EmployeeAbsenceInfo;
/**
 * EmployeeAbsenceInfoField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class EmployeeAbsenceInfoField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[EmployeeAbsenceInfo.employeeId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    employeeId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[EmployeeAbsenceInfo.lineNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineNum: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[EmployeeAbsenceInfo.fromDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    fromDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[EmployeeAbsenceInfo.toDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    toDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[EmployeeAbsenceInfo.reason]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    reason: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[EmployeeAbsenceInfo.approvedBy]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    approvedBy: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[EmployeeAbsenceInfo.confirmerNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    confirmerNumber: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace EmployeeAbsenceInfo {
    function build(json: {
        [keys: string]: FieldType;
    }): EmployeeAbsenceInfo;
}
//# sourceMappingURL=EmployeeAbsenceInfo.d.ts.map