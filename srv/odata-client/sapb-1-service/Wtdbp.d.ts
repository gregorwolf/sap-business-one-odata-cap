import { Moment } from 'moment';
import { WtdDetailType } from './WtdDetailType';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * Wtdbp
 */
export interface Wtdbp {
    /**
     * Bp Key Part 1.
     * @nullable
     */
    bpKeyPart1?: string;
    /**
     * Bp Key Part 2.
     * @nullable
     */
    bpKeyPart2?: string;
    /**
     * W Tax Code.
     * @nullable
     */
    wTaxCode?: string;
    /**
     * Effective Date From.
     * @nullable
     */
    effectiveDateFrom?: Moment;
    /**
     * Effective Date To.
     * @nullable
     */
    effectiveDateTo?: Moment;
    /**
     * Rate.
     * @nullable
     */
    rate?: number;
    /**
     * Detail Type.
     * @nullable
     */
    detailType?: WtdDetailType;
}
/**
 * @deprecated Since v1.6.0. Use [[Wtdbp.build]] instead.
 */
export declare function createWtdbp(json: any): Wtdbp;
/**
 * WtdbpField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class WtdbpField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, Wtdbp> {
    /**
     * Representation of the [[Wtdbp.bpKeyPart1]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bpKeyPart1: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[Wtdbp.bpKeyPart2]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bpKeyPart2: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[Wtdbp.wTaxCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    wTaxCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[Wtdbp.effectiveDateFrom]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    effectiveDateFrom: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[Wtdbp.effectiveDateTo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    effectiveDateTo: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[Wtdbp.rate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    rate: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[Wtdbp.detailType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    detailType: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Creates an instance of WtdbpField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace Wtdbp {
    /**
     * Metadata information on all properties of the `Wtdbp` complex type.
     */
    const _propertyMetadata: PropertyMetadata<Wtdbp>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): Wtdbp;
}
//# sourceMappingURL=Wtdbp.d.ts.map