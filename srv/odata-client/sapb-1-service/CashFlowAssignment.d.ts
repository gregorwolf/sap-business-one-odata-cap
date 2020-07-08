import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
export declare class CashFlowAssignmentField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}
export declare namespace CashFlowAssignment {
    function build(json: {
        [keys: string]: FieldType;
    }): CashFlowAssignment;
}
//# sourceMappingURL=CashFlowAssignment.d.ts.map