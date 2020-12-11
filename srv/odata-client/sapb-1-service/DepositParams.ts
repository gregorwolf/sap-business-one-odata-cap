/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * DepositParams
 */
export interface DepositParams {
  /**
   * Deposit Number.
   * @nullable
   */
  depositNumber?: number;
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: number;
  /**
   * Series.
   * @nullable
   */
  series?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[DepositParams.build]] instead.
 */
export function createDepositParams(json: any): DepositParams {
  return DepositParams.build(json);
}

/**
 * DepositParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class DepositParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, DepositParams> {
  /**
   * Representation of the [[DepositParams.depositNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  depositNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DepositNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[DepositParams.absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AbsEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[DepositParams.series]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  series: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Series', this, 'Edm.Int32');

  /**
   * Creates an instance of DepositParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, DepositParams);
  }
}

export namespace DepositParams {
  /**
   * Metadata information on all properties of the `DepositParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<DepositParams>[] = [{
    originalName: 'DepositNumber',
    name: 'depositNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'AbsEntry',
    name: 'absEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Series',
    name: 'series',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): DepositParams {
    return deserializeComplexTypeV4(json, DepositParams);
  }
}
