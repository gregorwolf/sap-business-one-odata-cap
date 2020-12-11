/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoBoeStatus } from './BoBoeStatus';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
   * Boe Status.
   * @nullable
   */
  boeStatus?: BoBoeStatus;
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
export class RetornoCodeParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, RetornoCodeParams> {
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
   * Representation of the [[RetornoCodeParams.boeStatus]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  boeStatus: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('BoeStatus', this);
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

  /**
   * Creates an instance of RetornoCodeParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, RetornoCodeParams);
  }
}

export namespace RetornoCodeParams {
  /**
   * Metadata information on all properties of the `RetornoCodeParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<RetornoCodeParams>[] = [{
    originalName: 'AbsEntry',
    name: 'absEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'OccurenceCode',
    name: 'occurenceCode',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'MovementCode',
    name: 'movementCode',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'BoeStatus',
    name: 'boeStatus',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'Description',
    name: 'description',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Color',
    name: 'color',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'FileFormat',
    name: 'fileFormat',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'BankCode',
    name: 'bankCode',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): RetornoCodeParams {
    return deserializeComplexTypeV4(json, RetornoCodeParams);
  }
}
