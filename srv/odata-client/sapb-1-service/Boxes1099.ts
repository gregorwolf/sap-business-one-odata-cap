/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class Boxes1099Field<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}

export namespace Boxes1099 {
  export function build(json: { [keys: string]: FieldType }): Boxes1099 {
    return createComplexType(json, {
      FormCode: (formCode: number) => ({ formCode: edmToTs(formCode, 'Edm.Int32') }),
      Box1099: (box1099: string) => ({ box1099: edmToTs(box1099, 'Edm.String') }),
      BoxDescription: (boxDescription: string) => ({ boxDescription: edmToTs(boxDescription, 'Edm.String') }),
      Minimum1099Amount: (minimum1099Amount: number) => ({ minimum1099Amount: edmToTs(minimum1099Amount, 'Edm.Double') })
    });
  }
}
