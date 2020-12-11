/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * BusinessPlaceIeNumber
 */
export interface BusinessPlaceIeNumber {
  /**
   * Bplid.
   * @nullable
   */
  bplid?: number;
  /**
   * State.
   * @nullable
   */
  state?: string;
  /**
   * Ie Number.
   * @nullable
   */
  ieNumber?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[BusinessPlaceIeNumber.build]] instead.
 */
export function createBusinessPlaceIeNumber(json: any): BusinessPlaceIeNumber {
  return BusinessPlaceIeNumber.build(json);
}

/**
 * BusinessPlaceIeNumberField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class BusinessPlaceIeNumberField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BusinessPlaceIeNumber> {
  /**
   * Representation of the [[BusinessPlaceIeNumber.bplid]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bplid: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BPLID', this, 'Edm.Int32');
  /**
   * Representation of the [[BusinessPlaceIeNumber.state]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  state: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('State', this, 'Edm.String');
  /**
   * Representation of the [[BusinessPlaceIeNumber.ieNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  ieNumber: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('IENumber', this, 'Edm.String');

  /**
   * Creates an instance of BusinessPlaceIeNumberField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, BusinessPlaceIeNumber);
  }
}

export namespace BusinessPlaceIeNumber {
  /**
   * Metadata information on all properties of the `BusinessPlaceIeNumber` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<BusinessPlaceIeNumber>[] = [{
    originalName: 'BPLID',
    name: 'bplid',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'State',
    name: 'state',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'IENumber',
    name: 'ieNumber',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): BusinessPlaceIeNumber {
    return deserializeComplexTypeV4(json, BusinessPlaceIeNumber);
  }
}
