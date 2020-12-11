/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * EcmActionLogParams
 */
export interface EcmActionLogParams {
  /**
   * Action Id.
   * @nullable
   */
  actionId?: number;
  /**
   * Log Id.
   * @nullable
   */
  logId?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[EcmActionLogParams.build]] instead.
 */
export function createEcmActionLogParams(json: any): EcmActionLogParams {
  return EcmActionLogParams.build(json);
}

/**
 * EcmActionLogParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class EcmActionLogParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, EcmActionLogParams> {
  /**
   * Representation of the [[EcmActionLogParams.actionId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  actionId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ActionID', this, 'Edm.Int32');
  /**
   * Representation of the [[EcmActionLogParams.logId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  logId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LogID', this, 'Edm.Int32');

  /**
   * Creates an instance of EcmActionLogParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, EcmActionLogParams);
  }
}

export namespace EcmActionLogParams {
  /**
   * Metadata information on all properties of the `EcmActionLogParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<EcmActionLogParams>[] = [{
    originalName: 'ActionID',
    name: 'actionId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'LogID',
    name: 'logId',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): EcmActionLogParams {
    return deserializeComplexTypeV4(json, EcmActionLogParams);
  }
}
