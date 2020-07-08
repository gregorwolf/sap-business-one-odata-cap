import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * AdvancedGlAccountParams
 */
export interface AdvancedGlAccountParams {
    /**
     * Item Code.
     * @nullable
     */
    itemCode?: string;
    /**
     * Warehouse.
     * @nullable
     */
    warehouse?: string;
    /**
     * Bp Code.
     * @nullable
     */
    bpCode?: string;
    /**
     * Federal Tax Id.
     * @nullable
     */
    federalTaxId?: string;
    /**
     * Ship To Country.
     * @nullable
     */
    shipToCountry?: string;
    /**
     * Ship To State.
     * @nullable
     */
    shipToState?: string;
    /**
     * Vat Group.
     * @nullable
     */
    vatGroup?: string;
    /**
     * Posting Date.
     * @nullable
     */
    postingDate?: Moment;
    /**
     * Usage.
     * @nullable
     */
    usage?: number;
    /**
     * Udf 1.
     * @nullable
     */
    udf1?: string;
    /**
     * Udf 2.
     * @nullable
     */
    udf2?: string;
    /**
     * Udf 3.
     * @nullable
     */
    udf3?: string;
    /**
     * Udf 4.
     * @nullable
     */
    udf4?: string;
    /**
     * Udf 5.
     * @nullable
     */
    udf5?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[AdvancedGlAccountParams.build]] instead.
 */
export declare function createAdvancedGlAccountParams(json: any): AdvancedGlAccountParams;
/**
 * AdvancedGlAccountParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class AdvancedGlAccountParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[AdvancedGlAccountParams.itemCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdvancedGlAccountParams.warehouse]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    warehouse: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdvancedGlAccountParams.bpCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bpCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdvancedGlAccountParams.federalTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    federalTaxId: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdvancedGlAccountParams.shipToCountry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    shipToCountry: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdvancedGlAccountParams.shipToState]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    shipToState: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdvancedGlAccountParams.vatGroup]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    vatGroup: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdvancedGlAccountParams.postingDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    postingDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[AdvancedGlAccountParams.usage]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    usage: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[AdvancedGlAccountParams.udf1]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    udf1: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdvancedGlAccountParams.udf2]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    udf2: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdvancedGlAccountParams.udf3]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    udf3: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdvancedGlAccountParams.udf4]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    udf4: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AdvancedGlAccountParams.udf5]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    udf5: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace AdvancedGlAccountParams {
    function build(json: {
        [keys: string]: FieldType;
    }): AdvancedGlAccountParams;
}
//# sourceMappingURL=AdvancedGlAccountParams.d.ts.map