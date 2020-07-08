import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ComplexTypeTimePropertyField, Entity, FieldType, Time } from '@sap-cloud-sdk/core/v4';
/**
 * EmployeeTransferDetail
 */
export interface EmployeeTransferDetail {
    /**
     * Transfer Id.
     * @nullable
     */
    transferId?: number;
    /**
     * Employee Id.
     * @nullable
     */
    employeeId?: number;
    /**
     * Transfered Date.
     * @nullable
     */
    transferedDate?: Moment;
    /**
     * Transfered Time.
     * @nullable
     */
    transferedTime?: Time;
    /**
     * Comment.
     * @nullable
     */
    comment?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[EmployeeTransferDetail.build]] instead.
 */
export declare function createEmployeeTransferDetail(json: any): EmployeeTransferDetail;
/**
 * EmployeeTransferDetailField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class EmployeeTransferDetailField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[EmployeeTransferDetail.transferId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    transferId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[EmployeeTransferDetail.employeeId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    employeeId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[EmployeeTransferDetail.transferedDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    transferedDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[EmployeeTransferDetail.transferedTime]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    transferedTime: ComplexTypeTimePropertyField<EntityT>;
    /**
     * Representation of the [[EmployeeTransferDetail.comment]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    comment: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace EmployeeTransferDetail {
    function build(json: {
        [keys: string]: FieldType;
    }): EmployeeTransferDetail;
}
//# sourceMappingURL=EmployeeTransferDetail.d.ts.map