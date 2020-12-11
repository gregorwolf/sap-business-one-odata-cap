/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * Boxes1099
 */
export interface Boxes1099 {
  /**
   * Form Code.
   * @nullable
   */
  formCode?: number;
  /**
   * Box 1099.
   * @nullable
   */
  box1099?: string;
  /**
   * Box Description.
   * @nullable
   */
  boxDescription?: string;
  /**
   * Minimum 1099 Amount.
   * @nullable
   */
  minimum1099Amount?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[Boxes1099.build]] instead.
 */
export function createBoxes1099(json: any): Boxes1099 {
  return Boxes1099.build(json);
}

/**
 * Boxes1099Field
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class Boxes1099Field<EntityT extends EntityV4> extends ComplexTypeField<EntityT, Boxes1099> {
  /**
   * Representation of the [[Boxes1099.formCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  formCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('FormCode', this, 'Edm.Int32');
  /**
   * Representation of the [[Boxes1099.box1099]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  box1099: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Box1099', this, 'Edm.String');
  /**
   * Representation of the [[Boxes1099.boxDescription]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  boxDescription: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BoxDescription', this, 'Edm.String');
  /**
   * Representation of the [[Boxes1099.minimum1099Amount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  minimum1099Amount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Minimum1099Amount', this, 'Edm.Double');

  /**
   * Creates an instance of Boxes1099Field.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, Boxes1099);
  }
}

export namespace Boxes1099 {
  /**
   * Metadata information on all properties of the `Boxes1099` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<Boxes1099>[] = [{
    originalName: 'FormCode',
    name: 'formCode',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Box1099',
    name: 'box1099',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'BoxDescription',
    name: 'boxDescription',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Minimum1099Amount',
    name: 'minimum1099Amount',
    type: 'Edm.Double',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): Boxes1099 {
    return deserializeComplexTypeV4(json, Boxes1099);
  }
}
