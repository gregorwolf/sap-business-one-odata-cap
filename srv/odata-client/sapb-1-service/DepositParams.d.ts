import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * DepositParams
 */
export interface DepositParams {
    /**
     * Deposit Number.
     * @nullable
     */
    depositNumber?: number;
    /**
     * Abs Entry.
     * @nullable
     */
    absEntry?: number;
    /**
     * Series.
     * @nullable
     */
    series?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[DepositParams.build]] instead.
 */
export declare function createDepositParams(json: any): DepositParams;
/**
 * DepositParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class DepositParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[DepositParams.depositNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    depositNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DepositParams.absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DepositParams.series]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    series: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace DepositParams {
    function build(json: {
        [keys: string]: FieldType;
    }): DepositParams;
}
//# sourceMappingURL=DepositParams.d.ts.map