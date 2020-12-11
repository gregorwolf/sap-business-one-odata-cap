/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * GovPayCodeAuthority
 */
export interface GovPayCodeAuthority {
  /**
   * Abs Id.
   * @nullable
   */
  absId?: number;
  /**
   * Bpl Id.
   * @nullable
   */
  bplId?: number;
  /**
   * State.
   * @nullable
   */
  state?: string;
  /**
   * Card Code.
   * @nullable
   */
  cardCode?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[GovPayCodeAuthority.build]] instead.
 */
export function createGovPayCodeAuthority(json: any): GovPayCodeAuthority {
  return GovPayCodeAuthority.build(json);
}

/**
 * GovPayCodeAuthorityField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class GovPayCodeAuthorityField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, GovPayCodeAuthority> {
  /**
   * Representation of the [[GovPayCodeAuthority.absId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AbsId', this, 'Edm.Int32');
  /**
   * Representation of the [[GovPayCodeAuthority.bplId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bplId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BPLId', this, 'Edm.Int32');
  /**
   * Representation of the [[GovPayCodeAuthority.state]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  state: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('State', this, 'Edm.String');
  /**
   * Representation of the [[GovPayCodeAuthority.cardCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cardCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CardCode', this, 'Edm.String');

  /**
   * Creates an instance of GovPayCodeAuthorityField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, GovPayCodeAuthority);
  }
}

export namespace GovPayCodeAuthority {
  /**
   * Metadata information on all properties of the `GovPayCodeAuthority` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<GovPayCodeAuthority>[] = [{
    originalName: 'AbsId',
    name: 'absId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'BPLId',
    name: 'bplId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'State',
    name: 'state',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'CardCode',
    name: 'cardCode',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): GovPayCodeAuthority {
    return deserializeComplexTypeV4(json, GovPayCodeAuthority);
  }
}
