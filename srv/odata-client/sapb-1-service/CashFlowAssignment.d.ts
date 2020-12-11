import { PaymentMeansTypeEnum } from './PaymentMeansTypeEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * CashFlowAssignment
 */
export interface CashFlowAssignment {
    /**
     * Cash Flow Assignments Id.
     * @nullable
     */
    cashFlowAssignmentsId?: number;
    /**
     * Cash Flow Line Item Id.
     * @nullable
     */
    cashFlowLineItemId?: number;
    /**
     * Credit.
     * @nullable
     */
    credit?: number;
    /**
     * Payment Means.
     * @nullable
     */
    paymentMeans?: PaymentMeansTypeEnum;
    /**
     * Check Number.
     * @nullable
     */
    checkNumber?: string;
    /**
     * Amount Lc.
     * @nullable
     */
    amountLc?: number;
    /**
     * Amount Fc.
     * @nullable
     */
    amountFc?: number;
    /**
     * Jdt Line Id.
     * @nullable
     */
    jdtLineId?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[CashFlowAssignment.build]] instead.
 */
export declare function createCashFlowAssignment(json: any): CashFlowAssignment;
/**
 * CashFlowAssignmentField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class CashFlowAssignmentField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, CashFlowAssignment> {
    /**
     * Representation of the [[CashFlowAssignment.cashFlowAssignmentsId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    cashFlowAssignmentsId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[CashFlowAssignment.cashFlowLineItemId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    cashFlowLineItemId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[CashFlowAssignment.credit]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    credit: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[CashFlowAssignment.paymentMeans]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    paymentMeans: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[CashFlowAssignment.checkNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    checkNumber: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[CashFlowAssignment.amountLc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    amountLc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[CashFlowAssignment.amountFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    amountFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[CashFlowAssignment.jdtLineId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    jdtLineId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of CashFlowAssignmentField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace CashFlowAssignment {
    /**
     * Metadata information on all properties of the `CashFlowAssignment` complex type.
     */
    const _propertyMetadata: PropertyMetadata<CashFlowAssignment>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): CashFlowAssignment;
}
//# sourceMappingURL=CashFlowAssignment.d.ts.map