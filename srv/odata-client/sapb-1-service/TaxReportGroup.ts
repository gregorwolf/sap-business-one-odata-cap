/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * TaxReportGroup
 */
export interface TaxReportGroup {
  /**
   * Code.
   * @nullable
   */
  code?: string;
  /**
   * Sum.
   * @nullable
   */
  sum?: BoYesNoEnum;
}

/**
 * @deprecated Since v1.6.0. Use [[TaxReportGroup.build]] instead.
 */
export function createTaxReportGroup(json: any): TaxReportGroup {
  return TaxReportGroup.build(json);
}

/**
 * TaxReportGroupField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class TaxReportGroupField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, TaxReportGroup> {
  /**
   * Representation of the [[TaxReportGroup.code]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Code', this, 'Edm.String');
  /**
   * Representation of the [[TaxReportGroup.sum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sum: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Sum', this);

  /**
   * Creates an instance of TaxReportGroupField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, TaxReportGroup);
  }
}

export namespace TaxReportGroup {
  /**
   * Metadata information on all properties of the `TaxReportGroup` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<TaxReportGroup>[] = [{
    originalName: 'Code',
    name: 'code',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Sum',
    name: 'sum',
    type: 'Edm.Enum',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): TaxReportGroup {
    return deserializeComplexTypeV4(json, TaxReportGroup);
  }
}
