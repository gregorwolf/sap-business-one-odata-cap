/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * RetornoCodeParams
 */
export interface RetornoCodeParams {
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: number;
  /**
   * Occurence Code.
   * @nullable
   */
  occurenceCode?: number;
  /**
   * Movement Code.
   * @nullable
   */
  movementCode?: number;
  /**
   * Description.
   * @nullable
   */
  description?: string;
  /**
   * Color.
   * @nullable
   */
  color?: number;
  /**
   * File Format.
   * @nullable
   */
  fileFormat?: string;
  /**
   * Bank Code.
   * @nullable
   */
  bankCode?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[RetornoCodeParams.build]] instead.
 */
export function createRetornoCodeParams(json: any): RetornoCodeParams {
  return RetornoCodeParams.build(json);
}

/**
 * RetornoCodeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class RetornoCodeParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[RetornoCodeParams.absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AbsEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[RetornoCodeParams.occurenceCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  occurenceCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('OccurenceCode', this, 'Edm.Int32');
  /**
   * Representation of the [[RetornoCodeParams.movementCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  movementCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('MovementCode', this, 'Edm.Int32');
  /**
   * Representation of the [[RetornoCodeParams.description]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  description: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Description', this, 'Edm.String');
  /**
   * Representation of the [[RetornoCodeParams.color]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  color: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Color', this, 'Edm.Int32');
  /**
   * Representation of the [[RetornoCodeParams.fileFormat]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fileFormat: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('FileFormat', this, 'Edm.String');
  /**
   * Representation of the [[RetornoCodeParams.bankCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bankCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BankCode', this, 'Edm.String');
}

export namespace RetornoCodeParams {
  export function build(json: { [keys: string]: FieldType }): RetornoCodeParams {
    return createComplexType(json, {
      AbsEntry: (absEntry: number) => ({ absEntry: edmToTs(absEntry, 'Edm.Int32') }),
      OccurenceCode: (occurenceCode: number) => ({ occurenceCode: edmToTs(occurenceCode, 'Edm.Int32') }),
      MovementCode: (movementCode: number) => ({ movementCode: edmToTs(movementCode, 'Edm.Int32') }),
      Description: (description: string) => ({ description: edmToTs(description, 'Edm.String') }),
      Color: (color: number) => ({ color: edmToTs(color, 'Edm.Int32') }),
      FileFormat: (fileFormat: string) => ({ fileFormat: edmToTs(fileFormat, 'Edm.String') }),
      BankCode: (bankCode: string) => ({ bankCode: edmToTs(bankCode, 'Edm.String') })
    });
  }
}
