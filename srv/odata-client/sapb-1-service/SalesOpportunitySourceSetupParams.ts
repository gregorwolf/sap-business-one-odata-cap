/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * SalesOpportunitySourceSetupParams
 */
export interface SalesOpportunitySourceSetupParams {
  /**
   * Sequence No.
   * @nullable
   */
  sequenceNo?: number;
  /**
   * Description.
   * @nullable
   */
  description?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[SalesOpportunitySourceSetupParams.build]] instead.
 */
export function createSalesOpportunitySourceSetupParams(json: any): SalesOpportunitySourceSetupParams {
  return SalesOpportunitySourceSetupParams.build(json);
}

/**
 * SalesOpportunitySourceSetupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class SalesOpportunitySourceSetupParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, SalesOpportunitySourceSetupParams> {
  /**
   * Representation of the [[SalesOpportunitySourceSetupParams.sequenceNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sequenceNo: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SequenceNo', this, 'Edm.Int32');
  /**
   * Representation of the [[SalesOpportunitySourceSetupParams.description]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  description: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Description', this, 'Edm.String');

  /**
   * Creates an instance of SalesOpportunitySourceSetupParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, SalesOpportunitySourceSetupParams);
  }
}

export namespace SalesOpportunitySourceSetupParams {
  /**
   * Metadata information on all properties of the `SalesOpportunitySourceSetupParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<SalesOpportunitySourceSetupParams>[] = [{
    originalName: 'SequenceNo',
    name: 'sequenceNo',
    type: 'Edm.Int32',
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
  export function build(json: { [keys: string]: FieldType }): SalesOpportunitySourceSetupParams {
    return deserializeComplexTypeV4(json, SalesOpportunitySourceSetupParams);
  }
}
