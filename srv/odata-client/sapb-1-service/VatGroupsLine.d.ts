import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * VatGroupsLine
 */
export interface VatGroupsLine {
    /**
     * Effectivefrom.
     * @nullable
     */
    effectivefrom?: Moment;
    /**
     * Rate.
     * @nullable
     */
    rate?: number;
    /**
     * Equalization Tax.
     * @nullable
     */
    equalizationTax?: number;
    /**
     * Datev Code.
     * @nullable
     */
    datevCode?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[VatGroupsLine.build]] instead.
 */
export declare function createVatGroupsLine(json: any): VatGroupsLine;
/**
 * VatGroupsLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class VatGroupsLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[VatGroupsLine.effectivefrom]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    effectivefrom: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[VatGroupsLine.rate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    rate: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[VatGroupsLine.equalizationTax]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    equalizationTax: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[VatGroupsLine.datevCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    datevCode: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace VatGroupsLine {
    function build(json: {
        [keys: string]: FieldType;
    }): VatGroupsLine;
}
//# sourceMappingURL=VatGroupsLine.d.ts.map