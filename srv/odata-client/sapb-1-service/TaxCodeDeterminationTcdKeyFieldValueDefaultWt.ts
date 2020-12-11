/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * TaxCodeDeterminationTcdKeyFieldValueDefaultWt
 */
export interface TaxCodeDeterminationTcdKeyFieldValueDefaultWt {
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
}

/**
 * @deprecated Since v1.6.0. Use [[TaxCodeDeterminationTcdKeyFieldValueDefaultWt.build]] instead.
 */
export function createTaxCodeDeterminationTcdKeyFieldValueDefaultWt(json: any): TaxCodeDeterminationTcdKeyFieldValueDefaultWt {
  return TaxCodeDeterminationTcdKeyFieldValueDefaultWt.build(json);
}

/**
 * TaxCodeDeterminationTcdKeyFieldValueDefaultWtField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class TaxCodeDeterminationTcdKeyFieldValueDefaultWtField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, TaxCodeDeterminationTcdKeyFieldValueDefaultWt> {
  /**
   * Representation of the [[TaxCodeDeterminationTcdKeyFieldValueDefaultWt.absId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AbsId', this, 'Edm.Int32');
  /**
   * Representation of the [[TaxCodeDeterminationTcdKeyFieldValueDefaultWt.wtCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wtCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('WTCode', this, 'Edm.String');

  /**
   * Creates an instance of TaxCodeDeterminationTcdKeyFieldValueDefaultWtField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, TaxCodeDeterminationTcdKeyFieldValueDefaultWt);
  }
}

export namespace TaxCodeDeterminationTcdKeyFieldValueDefaultWt {
  /**
   * Metadata information on all properties of the `TaxCodeDeterminationTcdKeyFieldValueDefaultWt` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<TaxCodeDeterminationTcdKeyFieldValueDefaultWt>[] = [{
    originalName: 'AbsId',
    name: 'absId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'WTCode',
    name: 'wtCode',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): TaxCodeDeterminationTcdKeyFieldValueDefaultWt {
    return deserializeComplexTypeV4(json, TaxCodeDeterminationTcdKeyFieldValueDefaultWt);
  }
}
