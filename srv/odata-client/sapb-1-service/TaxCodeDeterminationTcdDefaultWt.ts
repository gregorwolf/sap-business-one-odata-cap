/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TaxCodeDeterminationTcdDefaultWtTypeEnum } from './TaxCodeDeterminationTcdDefaultWtTypeEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * TaxCodeDeterminationTcdDefaultWt
 */
export interface TaxCodeDeterminationTcdDefaultWt {
  /**
   * Abs Id.
   * @nullable
   */
  absId?: number;
  /**
   * Wt Code.
   * @nullable
   */
  wtCode?: string;
  /**
   * Type.
   * @nullable
   */
  type?: TaxCodeDeterminationTcdDefaultWtTypeEnum;
}

/**
 * @deprecated Since v1.6.0. Use [[TaxCodeDeterminationTcdDefaultWt.build]] instead.
 */
export function createTaxCodeDeterminationTcdDefaultWt(json: any): TaxCodeDeterminationTcdDefaultWt {
  return TaxCodeDeterminationTcdDefaultWt.build(json);
}

/**
 * TaxCodeDeterminationTcdDefaultWtField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class TaxCodeDeterminationTcdDefaultWtField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, TaxCodeDeterminationTcdDefaultWt> {
  /**
   * Representation of the [[TaxCodeDeterminationTcdDefaultWt.absId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AbsId', this, 'Edm.Int32');
  /**
   * Representation of the [[TaxCodeDeterminationTcdDefaultWt.wtCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wtCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('WTCode', this, 'Edm.String');
  /**
   * Representation of the [[TaxCodeDeterminationTcdDefaultWt.type]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  type: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Type', this);

  /**
   * Creates an instance of TaxCodeDeterminationTcdDefaultWtField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, TaxCodeDeterminationTcdDefaultWt);
  }
}

export namespace TaxCodeDeterminationTcdDefaultWt {
  /**
   * Metadata information on all properties of the `TaxCodeDeterminationTcdDefaultWt` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<TaxCodeDeterminationTcdDefaultWt>[] = [{
    originalName: 'AbsId',
    name: 'absId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'WTCode',
    name: 'wtCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Type',
    name: 'type',
    type: 'Edm.Enum',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): TaxCodeDeterminationTcdDefaultWt {
    return deserializeComplexTypeV4(json, TaxCodeDeterminationTcdDefaultWt);
  }
}
