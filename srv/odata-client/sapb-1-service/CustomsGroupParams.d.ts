import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * CustomsGroupParams
 */
export interface CustomsGroupParams {
    /**
     * Code.
     * @nullable
     */
    code?: number;
    /**
     * Port Address.
     * @nullable
     */
    portAddress?: string;
    /**
     * Port State.
     * @nullable
     */
    portState?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[CustomsGroupParams.build]] instead.
 */
export declare function createCustomsGroupParams(json: any): CustomsGroupParams;
/**
 * CustomsGroupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class CustomsGroupParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[CustomsGroupParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[CustomsGroupParams.portAddress]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    portAddress: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[CustomsGroupParams.portState]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    portState: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace CustomsGroupParams {
    function build(json: {
        [keys: string]: FieldType;
    }): CustomsGroupParams;
}
//# sourceMappingURL=CustomsGroupParams.d.ts.map