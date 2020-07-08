import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * EmployeeReviewsInfo
 */
export interface EmployeeReviewsInfo {
    /**
     * Employee No.
     * @nullable
     */
    employeeNo?: number;
    /**
     * Line Num.
     * @nullable
     */
    lineNum?: number;
    /**
     * Date.
     * @nullable
     */
    date?: Moment;
    /**
     * Review Description.
     * @nullable
     */
    reviewDescription?: string;
    /**
     * Manager.
     * @nullable
     */
    manager?: number;
    /**
     * Grade.
     * @nullable
     */
    grade?: string;
    /**
     * Remarks.
     * @nullable
     */
    remarks?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[EmployeeReviewsInfo.build]] instead.
 */
export declare function createEmployeeReviewsInfo(json: any): EmployeeReviewsInfo;
/**
 * EmployeeReviewsInfoField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class EmployeeReviewsInfoField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[EmployeeReviewsInfo.employeeNo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    employeeNo: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[EmployeeReviewsInfo.lineNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineNum: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[EmployeeReviewsInfo.date]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    date: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[EmployeeReviewsInfo.reviewDescription]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    reviewDescription: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[EmployeeReviewsInfo.manager]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    manager: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[EmployeeReviewsInfo.grade]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    grade: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[EmployeeReviewsInfo.remarks]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    remarks: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace EmployeeReviewsInfo {
    function build(json: {
        [keys: string]: FieldType;
    }): EmployeeReviewsInfo;
}
//# sourceMappingURL=EmployeeReviewsInfo.d.ts.map