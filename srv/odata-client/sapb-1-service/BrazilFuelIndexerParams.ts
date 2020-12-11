/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * BrazilFuelIndexerParams
 */
export interface BrazilFuelIndexerParams {
  /**
   * Fuel Id.
   * @nullable
   */
  fuelId?: number;
  /**
   * Fuel Group Code.
   * @nullable
   */
  fuelGroupCode?: number;
  /**
   * Fuel Code.
   * @nullable
   */
  fuelCode?: string;
  /**
   * Description.
   * @nullable
   */
  description?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[BrazilFuelIndexerParams.build]] instead.
 */
export function createBrazilFuelIndexerParams(json: any): BrazilFuelIndexerParams {
  return BrazilFuelIndexerParams.build(json);
}

/**
 * BrazilFuelIndexerParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class BrazilFuelIndexerParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BrazilFuelIndexerParams> {
  /**
   * Representation of the [[BrazilFuelIndexerParams.fuelId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fuelId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('FuelID', this, 'Edm.Int32');
  /**
   * Representation of the [[BrazilFuelIndexerParams.fuelGroupCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fuelGroupCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('FuelGroupCode', this, 'Edm.Int32');
  /**
   * Representation of the [[BrazilFuelIndexerParams.fuelCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fuelCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('FuelCode', this, 'Edm.String');
  /**
   * Representation of the [[BrazilFuelIndexerParams.description]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  description: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Description', this, 'Edm.String');

  /**
   * Creates an instance of BrazilFuelIndexerParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, BrazilFuelIndexerParams);
  }
}

export namespace BrazilFuelIndexerParams {
  /**
   * Metadata information on all properties of the `BrazilFuelIndexerParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<BrazilFuelIndexerParams>[] = [{
    originalName: 'FuelID',
    name: 'fuelId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'FuelGroupCode',
    name: 'fuelGroupCode',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'FuelCode',
    name: 'fuelCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Description',
    name: 'description',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): BrazilFuelIndexerParams {
    return deserializeComplexTypeV4(json, BrazilFuelIndexerParams);
  }
}
