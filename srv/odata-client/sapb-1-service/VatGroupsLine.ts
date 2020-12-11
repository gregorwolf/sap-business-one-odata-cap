/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export function createVatGroupsLine(json: any): VatGroupsLine {
  return VatGroupsLine.build(json);
}

/**
 * VatGroupsLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class VatGroupsLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, VatGroupsLine> {
  /**
   * Representation of the [[VatGroupsLine.effectivefrom]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  effectivefrom: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('Effectivefrom', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[VatGroupsLine.rate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rate: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Rate', this, 'Edm.Double');
  /**
   * Representation of the [[VatGroupsLine.equalizationTax]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  equalizationTax: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('EqualizationTax', this, 'Edm.Double');
  /**
   * Representation of the [[VatGroupsLine.datevCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  datevCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DatevCode', this, 'Edm.Int32');

  /**
   * Creates an instance of VatGroupsLineField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, VatGroupsLine);
  }
}

export namespace VatGroupsLine {
  /**
   * Metadata information on all properties of the `VatGroupsLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<VatGroupsLine>[] = [{
    originalName: 'Effectivefrom',
    name: 'effectivefrom',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'Rate',
    name: 'rate',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'EqualizationTax',
    name: 'equalizationTax',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'DatevCode',
    name: 'datevCode',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): VatGroupsLine {
    return deserializeComplexTypeV4(json, VatGroupsLine);
  }
}
